import type { ModuleContent } from "@/lib/types";
import { porQueGithub } from "./por-que-github";
import { contaERepo } from "./conta-e-repo";
import { githubDesktop } from "./github-desktop";
import { estruturaDoRepo } from "./estrutura-do-repo";
import { ritualDiario } from "./ritual-diario";
import { conectandoClaude } from "./conectando-claude";

export const moduleContents: Record<string, ModuleContent> = {
  "por-que-github": porQueGithub,
  "conta-e-repo": contaERepo,
  "github-desktop": githubDesktop,
  "estrutura-do-repo": estruturaDoRepo,
  "ritual-diario": ritualDiario,
  "conectando-claude": conectandoClaude,
};
