import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
// constants
import { repositiories } from "@/constants";
// assets
import MergedIcon from "@/public/svg/merged.svg";

// export async function generateStaticParams() {
//   const payload = [];
//   const url = `https://api.github.com/search/issues?q=author:1akhanBaheti+type:pr+repo:makeplane/plane+state:closed&page=1&per_page=2`;
//   const response = await fetch(url, {
//     headers: {
//       Authorization: `token ${process.env.GITHUB_API_TOKEN}`,
//     },
//     cache: "force-cache",
//   });
//   const data = await response.json();
//   console.log("DATA fetching done");
//   for (const repoId in repositiories) {
//     payload.push({
//       repoId: repoId,
//       initialPRs: data,
//     });
//   }
//   return payload;
// }

export default async function RepoContributionsPage({ params }: { params: { repoId: string } }) {
  const { repoId } = params;

  if (!repositiories[decodeURIComponent(repoId)]) {
    return notFound();
  }
  const repository = repositiories[decodeURIComponent(repoId)];
  const url = `https://api.github.com/search/issues?q=author:1akhanBaheti+type:pr+repo:${repository.org}/${repository.name}+state:closed&page=1&per_page=2`;
  const response = await fetch(url, {
    headers: {
      Authorization: `token ${process.env.GITHUB_API_TOKEN}`,
    },
    cache: "force-cache",
  });
  const initialPRs = await response.json();
  return (
    <div className="h-fit flex flex-col py-10 bg-custom-background-100 max-w-7xl mx-auto">
      <h1 className="font-heading text-4xl">Pull Requests</h1>
      <div>
        <p className="font-paragraph tracking-tight text-custom-text-200 my-4">
          Here are some of the pull requests I have made to :{" "}
          <Link target="_blank" href={repository?.url} className="text-custom-primary-200 font-medium hover:underline">
            @{repository?.org}/{repository?.name}
          </Link>
        </p>
        {initialPRs?.items?.length > 0 &&
          initialPRs?.items?.map((pr: any) => (
            <div key={pr.id} className="py-4 border-b border-custom-border-200">
              <div className="flex items-center">
                <Image src={MergedIcon} alt="merged" width={12} height={12} className="mr-2" />
                <Link target="_blank" href={pr?.html_url} className="flex items-center w-fit">
                  <p className="font-medium font-paragraph text-custom-text-100 hover:text-custom-primary-200">
                    {pr?.title}
                  </p>
                </Link>
                {pr?.labels?.map((label: any) => (
                  <span
                    key={label.id}
                    className={`inline-block font-paragraph border  border-custom-border-200 font-semibold text-xs px-2 py-1 rounded-full ml-2`}
                  >
                    {label?.name}
                  </span>
                ))}
              </div>
              <p className="block text-xs font-medium font-paragraph text-custom-text-200 pt-1 pl-5">
                #{pr?.number} was merged on {new Date(pr?.closed_at).toDateString()}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}
