import {renderComponent,expect} from '../test_helper';
import App from '../../src/components/app';

//group together similar tests
describe('APP',()=>{
//to test a single attribute of a target
  it('shows the correct text',()=>{
    //create instance of App
    const component = renderComponent(App);
    //to make a single assertion about a target
    expect(component).to.contain('React simple starter');
})
})

