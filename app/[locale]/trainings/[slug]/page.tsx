import CourseDetailPage from "../../../trainings/[slug]/page";
import { isLocale } from "../../../i18n";

export default async function LocalizedCourseDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  return (
    <CourseDetailPage
      locale={isLocale(locale) ? locale : undefined}
      params={Promise.resolve({ slug })}
    />
  );
}
