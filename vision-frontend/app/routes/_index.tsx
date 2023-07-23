import type { ActionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { useEffect, useRef } from "react";

import { createGenImage } from "~/models/genimage.server";
import { requireUserId } from "~/session.server";
import Homepage, {} from '~/components/Homepage'

export const action = async ({ request }: ActionArgs) => {
  const userId = await requireUserId(request);

  const formData = await request.formData();
  const prompt = formData.get("prompt");

  if (typeof prompt !== "string" || prompt.length === 0) {
    return json(
      { errors: { prompt: "Prompt is required", title: null } },
      { status: 400 }
    );
  }

  const image = await createGenImage({ prompt, userId });

  return redirect(`/results`);
};

export default function Index() {
  const actionData = useActionData<typeof action>()
  const promptRef = useRef<HTMLTextAreaElement>(null)
  const submitRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (actionData?.errors?.prompt) {
      promptRef.current?.focus();
    }
  }, [actionData]);

  const onSubmit = () => submitRef.current?.click()

  return (
    <Homepage className='overflow-hidden' onSubmit={onSubmit}>
      <div className='h-24 w-full'>
        <Form method="post" className='w-full h-full'>
          <textarea
            ref={promptRef}
            name="prompt"
            rows={4}
            className="w-full flex-1 rounded-md text-lg leading-6 outline-0 border px-4 py-1"
            aria-invalid={actionData?.errors?.prompt ? true : undefined}
            aria-errormessage={actionData?.errors?.prompt ? "prompt-error" : undefined}
          />
          {actionData?.errors?.prompt ? (
            <div className="text-red-700" id="prompt-error">
              {actionData.errors.prompt}
            </div>
          ) : null}

          <button
            ref={submitRef}
            type="submit"
            className="hidden"
          />
        </Form>
      </div>
    </Homepage>
  );
}
