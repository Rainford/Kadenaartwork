import Accordion from 'react-bootstrap/Accordion';

function FAQ(){
    return (
        <div className="faq" id="faq">
            <div className="container ">
                <div className="row justify-content-center ">
                    <div className="col-md-6 ">
                        <div className="section-title text-center ">
                            <h2>FAQ</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10">
                        <Accordion defaultActiveKey={['0', '1', '2', '3', '4', '5', '6', '7']} alwaysOpen>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>what is Kadena Artwork ?</Accordion.Header>
                                <Accordion.Body>
                                    <p>Kadena Artwork is where you can get various NFTs on the Kadena blockchain using the Marmalade Standard.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>How much is the mint?</Accordion.Header>
                                <Accordion.Body>
                                    <p>Public 35 KDA WL 15 KDA</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>What Chain is Kadena Artwork on?</Accordion.Header>
                                <Accordion.Body>
                                    <p>Chain 8</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>How many Collection Count and why?</Accordion.Header>
                                <Accordion.Body>
                                    <p>5000 unique NFT’s randomly mint with ten 1 of 1’s</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>What is the utility?</Accordion.Header>
                                <Accordion.Body>
                                    <p>For the ten 1 of 1’s, each get all year round VIP access to 10 5 star all inclusive hotels in the Caribbean + (1 time free 3 days 2 nights at any of the 10 hotel anywhere in the Caribbean. All other holders get VIP access to these ten 5 star all inclusive hotels. VIP access will enable you to get up to 40% discount on each stay.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>Then what is in for us as holders?</Accordion.Header>
                                <Accordion.Body>
                                    <p>VIP access to 10 5 star all-inclusivee hotels in the Caribbean . VIP access will enable you to get up to 40% discount on each stay.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="6">
                                <Accordion.Header>Why Kadena?</Accordion.Header>
                                <Accordion.Body>
                                    <p>Kadena is the only PoW blockchain that has the ability to scale vertically. It comes with Marmalade, which is a complete infrastructure to launch and run game-changing NFT marketplaces. With this scalability in mind, this implies lower transaction fees in comparison to other blockchains and or other marketplaces. Many NFT marketplaces charge a 2.5% fee for transactions (minting, buying, & selling) in addition to high blockchain transaction fees. “NFT standards in Ethereum cannot enforce marketplace requirements like royalties. Only Marmalade offers genuine on-chain NFT sales, priced in any token, that are enforced no matter what exchange
                                    they're offered on.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="7">
                                <Accordion.Header>What is Kadena ($KDA)?</Accordion.Header>
                                <Accordion.Body>
                                    <p> <a href="https://kadena.io/" target="_blank"> Kadena </a> </p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FAQ
