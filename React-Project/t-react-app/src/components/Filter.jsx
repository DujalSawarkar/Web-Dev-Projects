export default function Filter(props) {
  let filterData = props.filterData;
  return (
    <div>
      {filterData.map((e) => {
        return <button key={e.id}>{e.title}</button>;
      })}
    </div>
  );
}
