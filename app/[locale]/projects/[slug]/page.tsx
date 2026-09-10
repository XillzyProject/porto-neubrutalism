import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Code2 } from "lucide-react";
import { getAllProjects, getProjectBySlug } from "@/lib/mdx";
import { getDictionary, locales, type Locale } from "@/lib/dictionary";
import { getTechIcon } from "@/lib/techIcons";

// Prerender semua kombinasi locale x slug saat build time
export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getAllProjects(locale).map((project) => ({ locale, slug: project.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug, locale);
  if (!project) return { title: "Proyek Tidak Ditemukan" };

  return {
    title: `${project.meta.title} | ell-ksyfa`,
    description: project.meta.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  if (!locales.includes(locale as Locale)) notFound();
  const validLocale = locale as Locale;

  const project = getProjectBySlug(slug, validLocale);
  if (!project) notFound();

  const dict = await getDictionary(validLocale);
  const detailDict = dict.projects.detail;
  const drawerDict = dict.projects.drawer;

  const data = project.meta;
  const tags = data.tags || [];

  return (
    <article className="max-w-4xl mx-auto py-12 md:py-20">
      {/* Kembali ke beranda */}
      <Link
        href={`/${validLocale}#projects`}
        className="inline-flex items-center gap-2 mb-8 font-mono-bold text-sm uppercase tracking-widest text-brand-text/70 hover:text-brand-text transition-colors"
      >
        <ArrowLeft size={16} strokeWidth={3} />
        {detailDict.back}
      </Link>

      {/* Gambar hero */}
      <div
        className="nb-card overflow-hidden mb-8 aspect-video w-full"
        style={{ boxShadow: "8px 8px 0 #0A0A0A" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      {/* Judul */}
      <h1 className="font-display text-4xl md:text-6xl uppercase leading-none mb-6">
        {data.title}
      </h1>

      {/* Tag teknologi */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag) => (
            <span key={tag} className="nb-tag">
              {getTechIcon(tag) && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={getTechIcon(tag)} alt={tag} className="w-4 h-4" />
              )}
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Deskripsi */}
      <p className="text-brand-text/80 text-lg leading-relaxed whitespace-pre-line mb-10">
        {data.description}
      </p>

      {/* Tombol aksi */}
      <div className="flex flex-wrap gap-4">
        {data.link && (
          <a
            href={data.link}
            target="_blank"
            rel="noopener noreferrer"
            className="nb-btn bg-brand-blue text-white"
          >
            <ExternalLink size={18} strokeWidth={3} />
            {drawerDict.viewLive}
          </a>
        )}
        {data.github && (
          <a
            href={data.github}
            target="_blank"
            rel="noopener noreferrer"
            className="nb-btn bg-brand-bg"
          >
            <Code2 size={18} strokeWidth={3} />
            {drawerDict.sourceCode}
          </a>
        )}
      </div>

      {/* ponytail: body MDX belum dirender (semua file kosong). Jika konten MDX ditulis, pakai next-mdx-remote yang sudah terinstal. */}
    </article>
  );
}
