import { Card } from '../../card/components/Card';
import { CardTitle } from '../../card/components/CardTitle';

export function BestExercises({
  className = '',
}: {
  className?: string;
}) {
  return (
    <Card className={`flex flex-col gap-4 ${className}`}>
      <CardTitle title="Best Exercises" />
      <main>
        <table className="w-full text-left">
          <thead>
            <tr className="fg-strong *:px-1">
              <th>Top</th>
              <th>Exercise</th>
              <th>Progress</th>
            </tr>
          </thead>
          <tbody>
            <tr className="font-light *:px-1 *:py-0.5 *:leading-none">
              <td>1</td>
              <td>Biceps Curl</td>
              <td className="fg-accent">10% improvement</td>
            </tr>
            <tr className="font-light *:px-1 *:py-0.5 *:leading-none">
              <td>2</td>
              <td>Bulgarians</td>
              <td className="fg-accent">7% improvement</td>
            </tr>
            <tr className="font-light *:px-1 *:py-0.5 *:leading-none">
              <td>3</td>
              <td>Dips</td>
              <td className="fg-accent">5% improvement</td>
            </tr>
            <tr className="font-light *:px-1 *:py-0.5 *:leading-none">
              <td>4</td>
              <td>Pull Ups</td>
              <td className="fg-accent">2% improvement</td>
            </tr>
          </tbody>
        </table>
      </main>
    </Card>
  );
}
