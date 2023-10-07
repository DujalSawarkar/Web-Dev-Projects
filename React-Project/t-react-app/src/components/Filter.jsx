export default function Filter(props) {
  let filterData = props.filterData;
  function ChangeCource() {
     
  }

  return (
    <div>
      {filterData.map((e) => {
        return (
          <button onClick={ChangeCource} key={e.id}>
            {e.title}
          </button>
        );
      })}
    </div>
  );
}
