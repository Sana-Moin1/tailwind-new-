import Link from "next/link";


export default function Header(data:any) {
  return (
    <> 
<div className={`${data.font.className} links-parent`}>
    <ul className="links">
<li className="link"><Link href="">Home</Link></li>
<li className="link" ><Link href="">About</Link></li>
<li className="link"><Link href="">Projects</Link></li>
<li className="link"><Link href="">Skills</Link></li>
<li className="link" ><Link href="">Contact</Link></li>

    </ul>
    </div>
     </>
        );
        }