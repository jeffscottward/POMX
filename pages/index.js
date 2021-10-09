import Link from "next/link";

export default function Index() {
  return (
    <div>
      <table>
        {[...new Array(3)].map((item, idx) => {
          return (
            <tr>
              {[...new Array(300)].map((item, idx) => {
                return <td>[]</td>;
              })}
            </tr>
          );
        })}
      </table>
    </div>
  );
}
