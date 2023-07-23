import { useEffect } from "react";
import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import {
  Form,
  isRouteErrorResponse,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
import invariant from "tiny-invariant";

/* import { deleteNote, getNote } from "~/models/note.server"; */
import { getGenImageByUser } from "~/models/genimage.server";
import { requireUserId } from "~/session.server";

export const loader = async ({ params, request }: LoaderArgs) => {
  const userId = await requireUserId(request);
  /* invariant(params.noteId, "noteId not found"); */

  const image = await getGenImageByUser({ userId });
  if (!image) {
    throw new Response("Not Found", { status: 404 });
  }
  return json({ image });
};

/* export const action = async ({ params, request }: ActionArgs) => {
 *   const userId = await requireUserId(request);
 *   invariant(params.noteId, "noteId not found");
 *
 *   await deleteNote({ id: params.noteId, userId });
 *
 *   return redirect("/notes");
 * }; */

export default function ResultsPage() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <span>{data.image.genImage.prompt}</span>
      <div className="w-64 h-64">
        {data.image.fileInBase64 && (
          <img
            className="w-full h-full"
            src={`data:image/png;base64,${data.image.fileInBase64}`}
          />
        )}
      </div>
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (error instanceof Error) {
    return <div>An unexpected error occurred: {error.message}</div>;
  }

  if (!isRouteErrorResponse(error)) {
    return <h1>Unknown Error</h1>;
  }

  if (error.status === 404) {
    return <div>Note not found</div>;
  }

  return <div>An unexpected error occurred: {error.statusText}</div>;
}
