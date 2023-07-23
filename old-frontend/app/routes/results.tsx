import { useEffect } from "react";
import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import {
  Form,
  isRouteErrorResponse,
  useLoaderData,
  useRouteError,
  useNavigate,
} from "@remix-run/react";
/* import invariant from "tiny-invariant"; */

/* import { deleteNote, getNote } from "~/models/note.server"; */
import { getGenImageByUser } from "~/models/genimage.server";
import { requireUserId } from "~/session.server";
import Results from "~/components/Results";
import ResultTile from "~/components/ResultTile";

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
  {
    /* <span>{data.image.genImage.prompt}</span> */
  }

  const navigate = useNavigate();

  const onClose = () => navigate("/");

  const onDownload = () => {
    const a = document.createElement("a");
    document.body.appendChild(a);
    a.download = "";
    a.href = `data:image/png;base64,${data.image.fileInBase64}`;
    a.click();
  };

  return (
    <Results onClose={onClose} onDownload={onDownload}>
      {data.image.fileInBase64 && (
        <ResultTile>
          <img
            className="h-[204px] w-full object-cover"
            src={`data:image/png;base64,${data.image.fileInBase64}`}
          />
        </ResultTile>
      )}
      {data.image.fileInBase64 && (
        <ResultTile>
          <img
            className="h-[204px] w-full object-cover"
            src={`data:image/png;base64,${data.image.fileInBase64}`}
          />
        </ResultTile>
      )}
    </Results>
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
