import React from "react";
import { type PostData } from "~/server/MarkdownLib";
import { ListContainer } from "../ListDetail/ListContainer";
import { TitleBar } from "../ListDetail/TitleBar";
import { ListItem } from "../ListDetail/ListItem";
import { usePathname } from "next/navigation";

export function RenderPostData({
  allData,
}: {
  allData: PostData[];
}) {
  const pathname = usePathname()

  return (
    <ListContainer data-cy="posts-list">
      <TitleBar title="Writing" />
      {allData?.map((post: PostData, index: React.Key) => {
        const active = pathname === `/writing/${post.path}`;

        return (
          <ListItem
            key={index}
            title={post.title}
            href="/writing/[id]"
            as={`/writing/${post.path}`}
            active={active}
            description={null}
            byline={post.date}
          />
        );
      })}
    </ListContainer>
  );
}
