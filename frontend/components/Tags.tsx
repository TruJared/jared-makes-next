interface TagProps {
 tags: {title:string}[]
}

export default function Tags({ tags }: TagProps) {
  return tags.map((tag) => (
    <span className="bg-accent-5 text-white border-0 rounded-md text-xs inline-block py-1 px-2 mr-1 my-1">
      {tag.title}
    </span>
  ));
}
