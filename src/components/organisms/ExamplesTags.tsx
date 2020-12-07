import { Tag, listOfExamples, uuidv4 } from './../../scripts/imports';

function ExamplesTags() {
  return(
    <div>
      { listOfExamples.map(function(example) {
        return (
          <div key={ uuidv4() } >
            <h1 key={ uuidv4() } >{ example.category }</h1>
            { example.tags.map(function(tag) {
              return <Tag key={ uuidv4() }>{ tag.title }</Tag>
            }) }
          </div>
        );
      })}
    </div>
  );
};

export default ExamplesTags;
