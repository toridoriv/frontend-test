import { Columns, Column, ExamplesHeader } from './../../scripts/imports';

function Examples() {
  const containerClasses = ['container', 'is-fluid', 'is-vcentered', 'is-align-self-center', 'is-mobile', 'is-centered'];
  return (
    <div id='Examples'>
      <Columns classes={ containerClasses }>
        <Column>
          <Columns classes={ ['is-centered'] }>
            <Column classes={ ['is-half', 'has-text-centered'] }>
              <ExamplesHeader/>
            </Column>
          </Columns>
        </Column>
      </Columns>
    </div>
  );
};

export default Examples;
