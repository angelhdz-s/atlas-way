import { PageContainer } from '@/presentation/modules/dashboard/components/page/PageContainer';
import { PageContent } from '@/presentation/modules/dashboard/components/page/PageContent';
import { BodySectionCards } from '@/modules/muscle/presentation/ui/components/BodySectionsCards';
import { getAllMuscles } from '@/modules/muscle/presentation/muscle.actions';
import type { MuscleDTO } from '@/modules/muscle/application/dtos/muscle.dto';
import { MuscularGroupsTable } from '@/modules/muscle/presentation/ui/components/MuscularGroupTable';

type BodySections = { name: string; groups: string[] };

export default async function MuscularGroupsPage() {
  const musclesResult = await getAllMuscles();

  const muscles = musclesResult.success ? musclesResult.data : [];

  const bodySections: BodySections[] = [];

  const bodySectionMapper = (section: MuscleDTO['group']['section'], groupName: string) => {
    const sectionIndex = bodySections.findIndex((s) => s.name === section.name);
    if (sectionIndex !== -1) {
      const bodySection = bodySections[sectionIndex];
      if (!bodySection.groups.includes(groupName))
        bodySections[sectionIndex].groups.push(groupName);
      return;
    }

    bodySections.push({
      name: section.name,
      groups: [groupName],
    });
  };

  for (const muscle of muscles) {
    const { group } = muscle;
    const { section } = group;
    bodySectionMapper(section, group.name);
  }

  return (
    <PageContainer>
      <PageContent className="flex flex-col gap-8 pt-8">
        <section className="flex flex-wrap gap-4">
          <BodySectionCards sections={bodySections} />
        </section>
        <div>
          <h2 className="text-strong text-2xl font-medium">Muscular Groups</h2>
        </div>
        <section>
          <MuscularGroupsTable muscles={muscles} />
          {/* <MuscularGroupsCards groups={muscularGroups} /> */}
        </section>
      </PageContent>
    </PageContainer>
  );
}
