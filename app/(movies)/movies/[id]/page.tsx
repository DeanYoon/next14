import React, { Suspense } from "react";
import { API_URL } from "../../../(home)/page";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/\bmovie-videos";

export const metadata = {
  title: "Detail",
};

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <h1>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos </h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </h1>
  );
}
