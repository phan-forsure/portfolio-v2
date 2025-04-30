import HoverCards from "./hoverCard";
type CardProps = {
  children: React.ReactNode;
  src: string;
  title: string;
  desc: string;
  by: string;
  link: string;
  row: number;
  col: number;
};
// just an idea for later
// function cardClick(
//   col: number,
//   row: number,
//   ref: React.RefObject<HTMLDivElement | null>
// ) {
//   const childrenCols = Array.from(ref.current?.children!).map(
//     (child) => child.classList[10].split("-")[1]
//   );
//   const childrenRows = Array.from(ref.current?.children!).map(
//     (child) => child.classList[11].split("-")[1]
//   );
//   // idea 1:
//   // for (let i in childrenCols) {
//   //   if (
//   //     childrenCols[i] != (col + 1).toString() &&
//   //     childrenRows[i] != (row + 1).toString()
//   //   ) {
//   //     const card = ref.current?.children[i] as HTMLDivElement;
//   //     card.classList.toggle("hover:bg-[var(--accent-bright)]");
//   //     card.classList.toggle("bg-[var(--accent-bright)]");
//   //     card.classList.toggle("border-[var(--border-bright)]");
//   //     card.classList.toggle("border-1");
//   //   }
//   // }
//   // idea 2:
//   for (let i in childrenCols) {
//     // console.log(childrenCols, col);
//     if (childrenCols[i] != (col + 1).toString() && col < 3) {
//       const card = ref.current?.children[i] as HTMLDivElement;
//       card.classList.toggle(`col-${col + 1}`);
//     } else if (childrenCols[i] != (col - 1).toString() && col > 1) {
//       const card = ref.current?.children[i] as HTMLDivElement;
//       card.classList.toggle(`col-${col - 1}`);
//     } else if (childrenRows[i] != (row + 1).toString() && row < 3) {
//       const card = ref.current?.children[i] as HTMLDivElement;
//       card.classList.toggle(`row-${row + 1}`);
//     } else if (childrenRows[i] != (row - 1).toString() && row > 1) {
//       const card = ref.current?.children[i] as HTMLDivElement;
//       card.classList.toggle(`col-${row - 1}`);
//     }
//   }
// }

export default function Card({
  children,
  src,
  title,
  desc,
  by,
  link,
  row,
  col,
}: CardProps) {
  return (
    <div
      className={`card w-full h-44 bg-card rounded-md border-1 border-border hover:border-[var(--border-bright)] hover:bg-[var(--accent-bright)] transition-all`}
    >
      <HoverCards title={desc} by={by} link={link}>
        <div className="w-full h-full flex items-center justify-center group">
          <div className="flex flex-col items-center justify-center h-full gap-4 opacity-60 group-hover:opacity-100 transition-opacity duration-200">
            <img
              className="p-4 pb-0 w-[100px] h-auto object-contain"
              src={src}
              alt={title}
            />
            {children}
          </div>
        </div>
      </HoverCards>
    </div>
  );
}
