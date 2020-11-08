import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// The documentation suggests the use of Jest with React. Personally, I have little experience with unit testing but I have used rspec when developing with Ruby on Rails in the past.

// For this application I would write the following tests:

// Movement
// 	describe 'move' do 
// 		it "should increase x by 1 when looking East" do
// 		expect(x).to eq(x+1)
// 		end
// 	end
	
// Limits
// 	describe 'limits' do 
// 		it "should ignore values of x and y above 4 or under 0" do
// 		expect(y).to eq(y)
// 		end
// 	end

// Rotation
// 	describe 'rotation' do 
// 		it "should rotate clockwise or anticlockwise staying between 0 and 360 degrees" do
// 		expect(rotation + 90).to eq(0)
// 		end
// 	end

// Placement
// 	describe 'placement' do 
// 		it "should place the character as indicated" do
// 		expect(inputY).to eq (y)
// 		expect(inputX).to eq (x)
// 		expect(inputCardinal).to eq (rotation)
// 		end
// 	end