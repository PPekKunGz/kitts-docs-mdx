import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/lib/layout.shared";
import { source } from "@/lib/source";

export default function DocsRootLayout({ children }: { children: React.ReactNode }) {
    return (
        <DocsLayout tree={source.pageTree} {...baseOptions()}>
            {children}
        </DocsLayout>
    );
}
