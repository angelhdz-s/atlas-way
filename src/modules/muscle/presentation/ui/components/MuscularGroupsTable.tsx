export async function MuscularGroupsTable() {
  const musculargroup = [
    {
      id: '1654-4546',
      name: 'Chest',
      bodySection: 'Torso',
      createdAt: new Date(2025, 7, 15),
    },
  ];

  return (
    <div className="rounded-lg bg-zinc-900/50 p-4 shadow-md">
      <header>
        <h2 className="fg-strong mb-2 pl-2 text-xl font-bold">
          Muscular Groups
        </h2>
      </header>
      <table className="w-full text-left">
        <thead>
          <tr className="*:px-2 *:py-1">
            <th>Group</th>
            <th>Body Section</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {musculargroup.map(
            ({ id, name, bodySection, createdAt }) => {
              return (
                <tr
                  key={id}
                  className="border-t-px border-zinc-700 *:px-2 *:py-1"
                >
                  <td>{name}</td>
                  <td>{bodySection}</td>
                  <td>{createdAt.toISOString()}</td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
}
