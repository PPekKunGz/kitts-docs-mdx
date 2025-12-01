import defaultMdxComponents from "fumadocs-ui/mdx";

import { Callout } from "fumadocs-ui/components/callout";
import { Cards, Card } from "fumadocs-ui/components/card";
import { Accordions, Accordion } from "fumadocs-ui/components/accordion";
import { Steps, Step } from "fumadocs-ui/components/steps";
import { CodeBlock } from "fumadocs-ui/components/codeblock";
import { Files, Folder, File as FdFile } from "fumadocs-ui/components/files";
import { Rocket } from "lucide-react";

import { CpuIcon, PanelsTopLeft, Terminal, Database, Album } from "lucide-react";

export const mdxComponents = {
    ...defaultMdxComponents,

    // UI
    Callout,
    Cards,
    Card,
    Accordions,
    Accordion,
    Steps,
    Step,
    CodeBlock,
    Files,
    Folder,
    File: FdFile,

    // Icons (whitelist)
    CpuIcon,
    PanelsTopLeft,
    Terminal,
    Database,
    Album,
    Rocket,
};
