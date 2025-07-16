// Blog utilities and markdown processing
export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  tags: string[]
  readTime: number
  published: boolean
}

// Sample blog posts data - in a real app, these would come from files or a CMS
export const blogPosts: BlogPost[] = [
  {
    slug: "zac",
    title: "ZAC (Zffu's Anticheat) 3rd generation - Risky but worth it gamble",
    date: "07-16-2025",
    excerpt: "",
    content: ```

```
]