export class CreateProjectDto {
  title: string;
  slug: string;
  description: string;
  tech_stack?: string[];
  repo_url?: string;
  live_url?: string;
  npm_url?: string;
  image_url?: string;
  is_featured?: boolean;
  sort_order?: number;
}