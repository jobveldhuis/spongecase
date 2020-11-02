import React from 'react'

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            output: ''
        }

        this.textToMock = this.mock.bind(this);
    }

    mock(event)
    {
        const input = event.target.value.split('');
        let back2 = '';
        let back1 = '';
        const output = input.map((char, index) => {
            if (index === 0) {
                back2 = this.randomUpperCase(char);
                return back2;
            } else if (index === 1) {
                back1 = this.randomUpperCase(char);

            } else {
                if (back2 === back2.toUpperCase() && back1 === back1.toUpperCase()) {
                    back2 = back1;
                    back1 = char.toLowerCase();
                } else if (back2 === back2.toLowerCase() && back1 === back1.toLowerCase()) {
                    back2 = back1;
                    back1 = char.toUpperCase();
                } else {
                    back2 = back1;
                    back1 = this.randomUpperCase(char);
                }
            }
            return back1;
        })

        this.setState({
            output: output.join('')
        })
    }

    randomUpperCase(char)
    {
        const flippedCoin = Math.floor(Math.random() * 2);
        if (flippedCoin === 0) {
            return char.toUpperCase();
        } else {
            return char.toLowerCase();
        }
    }

    render() {
        return (
            <>
                <div className="flex flex-col items-center justify-center h-screen">
                    <div className="max-w-lg bg-white text-black border rounded-lg shadow-lg p-4 sm:p-6">
                        <h1 className="font-bold text-2xl mb-2">
                            Are ya ready kids?
                        </h1>
                        <p className="text-xs">
                            Generate your own mocking Spongebob text, without any of the hassle of randomly having to press shift and/or caps lock. Just type in the text you want to mockify and we'll do the rest.
                        </p>

                        <form className="mt-6">
                            <div className="mb-4">
                            <textarea
                                className="shadow resize-none h-20 text-xs appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter your text here"
                                onChange={this.textToMock}
                                required
                            />
                            </div>
                            <div className="mb-4">
                            <textarea
                                className="shadow resize-none h-20 text-xs appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="output"
                                value={this.state.output}
                                disabled
                            />
                            </div>
                        </form>
                    </div>
                    <div className="text-xs mt-4 footer">
                        Proudly developed by <a href="https://baukefrederik.me/">@baukefrederik</a>.
                    </div>
                </div>
            </>
        )
    }
}


export default Homepage;