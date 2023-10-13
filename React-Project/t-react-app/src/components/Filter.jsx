export default function Filter(props) {
  let filterData = props.filterData;
  let Data = props.data;
  let setData = props.setdata;
  function ChangeCource(title) {
    // let title = props.title;
    setData(title);
    // console.log(title);
  }
  return (
    <div>
      {filterData.map((e) => {
        return (
          <button onClick={() => ChangeCource(e.title)} key={e.id}>
            {e.title}
          </button>
        );
      })}
    </div>
  );
}
