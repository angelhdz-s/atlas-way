import { PageContainer } from '@/presentation/modules/dashboard/page/components/PageContainer';
import { PageContent } from '@/presentation/modules/dashboard/page/components/PageContent';
import { PageHeader } from '@/presentation/modules/dashboard/page/components/PageHeader';
import { BodySectionCards } from '@/modules/muscle/presentation/ui/components/BodySectionsCards';
import { MuscularGroupsCards } from '@/modules/muscle/presentation/ui/components/MuscularGroupsCards';
import { getAllMuscles } from '@/modules/muscle/presentation/muscle.actions';
import type { MuscleDTO } from '@/modules/muscle/application/dtos/muscle.dto';

type MuscularGroup = {
  name: string;
  muscles: string[];
};

type BodySections = { name: string; groups: string[] };

export default async function MuscularGroupsPage() {
  const musclesResult = await getAllMuscles();

  const muscles = musclesResult.success ? musclesResult.data : [];

  const muscularGroups: MuscularGroup[] = [];

  const bodySections: BodySections[] = [];

  const muscularGroupMapper = (group: MuscleDTO['group'], muscleName: string) => {
    const groupIndex = muscularGroups.findIndex((g) => g.name === group.name);
    if (groupIndex !== -1) {
      const muscularGroup = muscularGroups[groupIndex];
      if (!muscularGroup.muscles.includes(muscleName))
        muscularGroups[groupIndex].muscles.push(muscleName);
      return;
    }

    muscularGroups.push({
      name: group.name,
      muscles: [muscleName],
    });
  };

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
    muscularGroupMapper(group, muscle.name);
    bodySectionMapper(section, group.name);
  }

  return (
    <PageContainer>
      <PageHeader title="Muscles" />
      <PageContent className="flex flex-col gap-8">
        <div>
          <h2 className="fg-strong text-2xl font-medium">Body Sections</h2>
        </div>
        <section className="flex flex-wrap gap-4">
          <BodySectionCards sections={bodySections} />
        </section>
        <div>
          <h2 className="fg-strong text-2xl font-medium">Muscular Groups</h2>
        </div>
        <section className="flex flex-wrap gap-4">
          <MuscularGroupsCards groups={muscularGroups} />
        </section>
      </PageContent>
    </PageContainer>
  );
}
