import React from 'react';
import Navigation from "./Navigation";
import Head from "next/head"
export default function Container(props) {
    const { children, title } = props;
    return (
        <div>
            <Head>
                <title>{title ? title : "home"}</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/flatly/bootstrap.min.css" />
            </Head>
            <Navigation />
            <div className="container p-4">
                {children}
            </div>
        </div>
    )
}
