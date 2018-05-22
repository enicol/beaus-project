import React, { Component } from 'react';
import './App.css';
import Product from './Product.js';
import logo from './barley.svg';
import buenosImg from './buenos.jpeg';
import greenImg from './tom_green.jpeg';
import greenStoutImg from './greenSummer.jpeg';
import fullImg from './fulltime.jpeg';
import farmImg from './farm.jpeg';
import bloodImg from './blood.jpeg';
import cavalierImg from './cavalier.jpeg';
import otherImg from './other.jpeg';
// import { fetchItems } from './api.js';

const products = [
    {
        name: "Buenos Dias Gruit",
        imgLink: buenosImg,
        flavourStyle: "Medium & Hoppy",
        alcContent: "4.5",
        description: "Beau’s Gruit Series takes inspiration from centuries-old brewing tradition; a time before the Bavarian Purity Act of 1516 that declared that all beer be made solely with barley, hops, and water. In gruit ale, herbs, spices and other botanicals replace a dominant hop character, throwing open the door to experimentation. Each gruit in this series will have a unique combination of ingredients and flavours.",
    },
    {
        name: "Blood Simple",
        imgLink: bloodImg,
        flavourStyle: "Medium & Fruity",
        alcContent: "5.3",
        description: "Juice from organic Moro blood oranges and peel from organic California oranges add intense colour and pithy fruitiness to this hazy Belgian-style witbier. Tart and fruity, refreshing and juicy, it’s like sipping sunshine in a glass!"
    },
    {
        name: "Cavalier Bleu",
        imgLink: cavalierImg,
        flavourStyle: "Medium & Fruity",
        alcContent: "6.0",
        description: "Built on the foundation of a generously hopped I.P.A., Cavalier Bleu blends the citrusy aromas of organic New Zealand hop varieties with the fruity flavours found in American Azacca and German Mandarina Bavaria hops. Topping it off is an infusion of organic blueberry juice made from wild Québec blueberries."
    },
    {   
        name: "New Lang Syne",
        imgLink: otherImg,
        flavourStyle: "Sour",
        alcContent: "9.0",
        description: "Light gold colour with a fine head; aromas of lemon zest, sweet fruit, spice and toasted grain, with floral, tropical fruit, wood and apple notes; dryish, medium bodied, rounded palate, with balanced acidity and a fine sparkle, flavours of white fruit, spice and citrus, with hints of wine and pepper on the long finish.",
    },
    {   
     
        name: "Full Time Ipa",
        imgLink: fullImg,
        flavourStyle: "Medium & Hoppy",
        alcContent: "6.7",
        description: "An aromatic I.P.A. in the contemporary West Coast style. Big tropical fruit gives way to pine, courtesy of American and New Zealand organic hop varieties. With its bold flavours and balanced bitterness, you’ll want to save a permanent spot for Full Time I.P.A. in the beer fridge of your heart.",
    },
    {
        name: "The Tom Green Beer",
        imgLink: greenImg,
        flavourStyle: "Full & Roasted",
        alcContent: "5.0",
        description: "This is The Tom Green Beer, it’s not the Green Tom Beer… Beau’s and Canadian actor and comedian Tom Green have collaborated to create The Tom Green Beer! A milk stout, The Tom Green Beer displays flavours of chocolate and coffee, while delivering a creamy, velvety texture, and finishing with a mild sweetness.",
    },
    {
        name: "Farm Table Saison",
        imgLink: farmImg,
        flavourStyle: "Medium & Fruity",
        alcContent: "4.7",
        description: "Part of Beau’s series of true-to-style beers, Saison is a refreshingly sippable farmhouse ale with snappy spice, fruity aromas and a brisk finish. The Saison label art hints at the sultry days of summer in the city, a modern twist on this rustic seasonal style.",
    },
    {
        name: "Tom Green Summer Stout",
        imgLink: greenStoutImg,
        flavourStyle: "Medium & Roasted",
        alcContent: "5.0",
        description: "Our Tom Green Beer Milk Stout is going blonde for the summer! Tom Green Summer Stout is a sun-kissed golden ale with roasty and rich stout-like flavour. It is brewed with cacao nibs, and infused with organic fairtrade Colombian coff­ee roasted locally at Ottawa’s Bridgehead Roastery. A hint of sweetness is contributed by the milk sugar (lactose) that makes a milk stout special."
    },
]
class App extends Component {
    state = {
        currentItem: null
    };

    handleItemClick = (item) => {
        this.setState({
            currentItem: item
        })
    }

    onClose = () => {
        this.setState({
            currentItem: null
        })
    }
    

    renderProduct() {
        let current = this.state.currentItem;
        if (!this.state.currentItem) return;
        return (
            <div>
                <span
                    className="close"
                    onClick={() => this.onClose()}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 197.22 197.22">
                        <polygon points="164.11 40.59 156.63 33.11 98.61 91.13 40.6 33.11 33.11 40.59 91.13 98.61 33.11 156.63 40.6 164.11 98.61 106.1 156.63 164.11 164.11 156.63 106.1 98.61 164.11 40.59"></polygon>
                    </svg>
                </span>
                <Product 
                    title={current.name}
                    imgLink={current.imgLink}
                    flavourStyle={current.flavourStyle}
                    description={current.description} />
            </div>
        )
    }

    renderProductList() {
        return (
            <div className="productList">
            {
                products.map((item, index) => {
                    return (
                        <div key={index} className="product" onClick={()=> this.handleItemClick(item)}>
                            <div className="productImage">
                                <img src={item.imgLink} className="prodThumb" alt={`${item.imgLink} beer`} />
                                <div className="imgHoverLayer">
                                    <p className="imgHover">VIEW</p>
                                </div>
                            </div>
                            <h4>{item.name}</h4>
                            <div className="productDetails">
                                <span style={{marginRight:15+'px'}}>{item.flavourStyle}</span>
                                <span>{` ${item.alcContent} %`}</span>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        )
    }
    render() {
        let title = this.state.currentItem !== null ? this.state.currentItem.name : '';
        return (
            <div className="App">
                <div className="line"></div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">BEAU'S <span className="">{`${title}`}</span></h1>
                </header>
                <div className="container">
                    { this.state.currentItem ? this.renderProduct() : this.renderProductList() }
                </div>
            </div>
        );
    }
}

export default App;