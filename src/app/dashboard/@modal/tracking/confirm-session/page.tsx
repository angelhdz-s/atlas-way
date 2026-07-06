import { Button } from '@/presentation/modules/button/components/Button';

export default async function ConfirmSessionTrackingPage() {
  return (
    <div className="rounded-2xl">
      <header>
        <h3>Push day</h3>
        <p>Focused on muscle development</p>
      </header>
      <main>
        <ul>
          <li>
            <ul>
              <li>Exercise</li>
              <li>4 x 12</li>
              <li>50 lb</li>
              <li> More </li>
            </ul>
          </li>
        </ul>
      </main>
      <footer className="">
        <Button variant={{ color: 'simple' }}>Cancel</Button>
        <Button variant={{ color: 'simple' }}>Cancel</Button>
      </footer>
    </div>
  );
}
