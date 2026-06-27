import { config, fields, collection } from "@keystatic/core";
import { block } from "@keystatic/core/content-components";

const isGithubMode =
  process.env.NODE_ENV === "production" &&
  !!process.env.KEYSTATIC_GITHUB_CLIENT_ID;

const storage = isGithubMode
  ? ({
      kind: "github" as const,
      repo:
        (process.env.KEYSTATIC_GITHUB_REPO as `${string}/${string}`) ||
        "crystel-rosaai/rosaai-website",
    } as const)
  : { kind: "local" as const };

export default config({
  storage,
  ui: {
    brand: {
      name: "RosaAI",
    },
  },
  collections: {
    blog: collection({
      label: "Blog Posts",
      slugField: "title",
      path: "blog/content/*",
      format: { contentField: "body" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        description: fields.text({
          label: "Description",
          multiline: true,
          description: "SEO description — appears in search results and social cards",
        }),
        date: fields.date({
          label: "Publish Date",
          description: "When this post should be dated",
        }),
        tags: fields.array(fields.text({ label: "Tag" }), {
          label: "Tags",
          itemLabel: (props) => props.value || "New tag",
          description: "Categories for filtering (e.g., Automation, AI, Small Business)",
        }),
        featured: fields.checkbox({
          label: "Featured Post",
          description: "Show this post prominently on the blog page",
        }),
        readTime: fields.text({
          label: "Read Time",
          description: 'e.g., "5 min read"',
        }),
        author: fields.select({
          label: "Author",
          options: [{ label: "Crystel Cortez", value: "crystel" }],
          defaultValue: "crystel",
          description: "Post author",
        }),
        thumbnail: fields.image({
          label: "Thumbnail Image",
          directory: "public/blog/images",
          publicPath: "/blog/images",
          description: "Featured image for the blog card and hero section",
        }),
        body: fields.mdx({
          label: "Content",
          description: "Write your blog post content here",
          options: {
            image: {
              directory: "public/blog/images",
              publicPath: "/blog/images",
            },
          },
          components: {
            VideoEmbed: block({
              label: "Video Embed",
              description: "Embed a YouTube or Vimeo video",
              schema: {
                url: fields.text({
                  label: "Video URL",
                  description: "YouTube or Vimeo URL",
                }),
                caption: fields.text({
                  label: "Caption",
                  description: "Optional caption below the video",
                }),
              },
            }),
            Callout: block({
              label: "Callout Box",
              description: "Highlight important information",
              schema: {
                type: fields.select({
                  label: "Type",
                  options: [
                    { label: "Info", value: "info" },
                    { label: "Tip", value: "tip" },
                    { label: "Warning", value: "warning" },
                  ],
                  defaultValue: "info",
                }),
                title: fields.text({ label: "Title" }),
                content: fields.text({
                  label: "Content",
                  multiline: true,
                }),
              },
            }),
            StatCard: block({
              label: "Stat Card",
              description: "Display a key metric or result",
              schema: {
                value: fields.text({
                  label: "Value",
                  description: 'e.g., "90%", "5+ hours"',
                }),
                label: fields.text({
                  label: "Label",
                  description: 'e.g., "Faster Processing"',
                }),
              },
            }),
            BeforeAfter: block({
              label: "Before/After Comparison",
              description: "Show old vs. new workflow side by side",
              schema: {
                beforeTitle: fields.text({
                  label: "Before Title",
                  defaultValue: "Before",
                }),
                beforeContent: fields.text({
                  label: "Before Content",
                  multiline: true,
                }),
                afterTitle: fields.text({
                  label: "After Title",
                  defaultValue: "After",
                }),
                afterContent: fields.text({
                  label: "After Content",
                  multiline: true,
                }),
              },
            }),
            Quote: block({
              label: "Quote / Testimonial",
              description: "A styled quote with attribution",
              schema: {
                text: fields.text({
                  label: "Quote Text",
                  multiline: true,
                }),
                author: fields.text({ label: "Author Name" }),
                role: fields.text({
                  label: "Author Role",
                  description: 'e.g., "Owner, ABC Company"',
                }),
              },
            }),
          },
        }),
      },
    }),

    automations: collection({
      label: "Automations (Case Studies)",
      slugField: "title",
      path: "content/automations/*",
      format: { contentField: "body" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        description: fields.text({
          label: "Short Description",
          multiline: true,
          description: "Brief summary shown in the sidebar and cards",
        }),
        longDescription: fields.text({
          label: "Detailed Description",
          multiline: true,
          description: "Full explanation shown in the content area",
        }),
        tags: fields.array(fields.text({ label: "Tag" }), {
          label: "Tags",
          itemLabel: (props) => props.value || "New tag",
        }),
        icon: fields.select({
          label: "Icon",
          options: [
            { label: "Zap (Lightning)", value: "zap" },
            { label: "FileText (Document)", value: "file-text" },
            { label: "MessageSquare (Chat)", value: "message-square" },
            { label: "Mail (Email)", value: "mail" },
            { label: "Calendar", value: "calendar" },
            { label: "Database", value: "database" },
            { label: "BarChart3 (Analytics)", value: "bar-chart-3" },
            { label: "ShoppingCart (E-commerce)", value: "shopping-cart" },
            { label: "Users (HR/Team)", value: "users" },
            { label: "Bot (AI)", value: "bot" },
            { label: "Workflow", value: "workflow" },
            { label: "Globe (Web)", value: "globe" },
          ],
          defaultValue: "zap",
        }),
        gradient: fields.select({
          label: "Gradient Style",
          options: [
            { label: "Purple to Teal", value: "from-brand-purple to-brand-teal" },
            { label: "Teal to Magenta", value: "from-brand-teal to-brand-magenta" },
            { label: "Magenta to Purple", value: "from-brand-magenta to-brand-purple" },
          ],
          defaultValue: "from-brand-purple to-brand-teal",
        }),
        metric: fields.text({
          label: "Key Metric",
          description: 'e.g., "5+ hrs/week saved", "90% faster"',
        }),
        details: fields.array(fields.text({ label: "Step" }), {
          label: "How It Works (Steps)",
          itemLabel: (props) => props.value || "New step",
          description: "Numbered steps explaining the automation workflow",
        }),
        thumbnail: fields.image({
          label: "Automation Image",
          directory: "public/automations/images",
          publicPath: "/automations/images",
          description: "Screenshot or diagram of the automation",
        }),
        order: fields.integer({
          label: "Display Order",
          description: "Lower numbers appear first in the sidebar",
          defaultValue: 10,
        }),
        body: fields.mdx({
          label: "Case Study Content",
          description: "Full case study write-up (optional — for detailed pages)",
          options: {
            image: {
              directory: "public/automations/images",
              publicPath: "/automations/images",
            },
          },
          components: {
            VideoEmbed: block({
              label: "Video Embed",
              schema: {
                url: fields.text({ label: "Video URL" }),
                caption: fields.text({ label: "Caption" }),
              },
            }),
            Callout: block({
              label: "Callout Box",
              schema: {
                type: fields.select({
                  label: "Type",
                  options: [
                    { label: "Info", value: "info" },
                    { label: "Tip", value: "tip" },
                    { label: "Warning", value: "warning" },
                  ],
                  defaultValue: "info",
                }),
                title: fields.text({ label: "Title" }),
                content: fields.text({ label: "Content", multiline: true }),
              },
            }),
            StatCard: block({
              label: "Stat Card",
              schema: {
                value: fields.text({ label: "Value" }),
                label: fields.text({ label: "Label" }),
              },
            }),
            BeforeAfter: block({
              label: "Before/After Comparison",
              schema: {
                beforeTitle: fields.text({ label: "Before Title", defaultValue: "Before" }),
                beforeContent: fields.text({ label: "Before Content", multiline: true }),
                afterTitle: fields.text({ label: "After Title", defaultValue: "After" }),
                afterContent: fields.text({ label: "After Content", multiline: true }),
              },
            }),
          },
        }),
      },
    }),
  },
});
