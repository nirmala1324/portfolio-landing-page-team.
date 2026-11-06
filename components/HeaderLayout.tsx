"use client";

import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";

const headerData: object[] = [
    {label: 'Product', link: '/product'},
    {label: 'Blog', link: '/blog'},
    {label: 'Support', link: '/support'},
    {label: 'Log In', link: '/log-in'},
]

export default function HeaderLayout() {
    const pathName:string = usePathname();
    const [isDark, setIsDark]:boolean = useState(false);
    const lightLink:string[] = ['/bio'];

    useEffect(() => {
        if (lightLink.includes(pathName)) {
            setIsDark(false);
        } else {
            setIsDark(true);
        }
    }, [pathName]);
    console.log("Check current pathname");

    return (
        <div className='header-container'>
            <div className='content-pc'>
                <div className='header-center-container'>
                    <div className='icon-image'>
                        <img src={`/common/team-logo-${isDark ? 'light' : 'dark'}.png`} alt='icon'/>
                    </div>
                    <div className='right-container'>
                        {headerData.map(header => (
                            <div className='header-text'
                                 style={{color: isDark ? 'white' : 'black'}}>
                                {header.label}
                            </div>
                        ))}
                        <div className='header-button'
                             style={{color: isDark ? 'white' : 'black'}}>
                            Get Access
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}