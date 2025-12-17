import { notFound } from "next/navigation";
import type { Metadata } from "next";

import {
    DocsPage,
    DocsBody,
    DocsTitle,
    DocsDescription
} from "fumadocs-ui/layouts/docs/page";

import { source } from "@/lib/source";
import { mdxComponents } from "@/lib/mdx-components";

export default async function DocsPageRoute({ params }: any) {
    const { slug } = await params;

    const page = source.getPage(slug);
    if (!page) notFound();

    const MDX = page.data.body;

    return (
        <DocsPage toc={page.data.toc}>
            {/* <DocsTitle>{page.data.title}</DocsTitle> */}
            {/* <DocsDescription>{page.data.description}</DocsDescription> */}

            <DocsBody>
                <MDX components={mdxComponents} />
            </DocsBody>
        </DocsPage>
    );
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
    const { slug } = await params;
    const page = source.getPage(slug);
    if (!page) notFound();

    return {
        title: page.data.title + " | Kitt's Docs",
        description: page.data.description,
    };
}

export function generateStaticParams() {
    return source.generateParams();
}
