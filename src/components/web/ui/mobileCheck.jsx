import React, { Component } from 'react';

class MobileCheck extends Component {
    componentDidMount() {
        const script = document.createElement('script');

        script.src = '//cdn.jsdelivr.net/github-cards/latest/widget.js';
        script.async = true;

        document.body.appendChild(script);
    }

    render() {
        return (
            <div id="mobile">
                <div id="title">EcoQuest</div>
                <div id="body">
                    Aplikacja jest przystosowana do działania jedynie na smartphony i urządzenia mobilne. <br />
                    Odwiedź nasze repozytorium, aby dowiedzieć się więcej. <br />
                    <div
                        className="github-card"
                        data-github="ClayCore/HackHeroes2019"
                        data-width="600"
                        data-height="132"
                        data-theme="default"
                    ></div>
                </div>
                <div id="footer">EcoQuest&trade; &mdash; 2019 &mdash; Wszelkie Prawa Zastrzeżone</div>
            </div>
        );
    }
}

export default MobileCheck;
