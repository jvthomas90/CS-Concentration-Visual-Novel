import React from 'react';
import '../App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import GameStart from './GamePgs/GameStart';
import Game1 from './GamePgs/Game1';
import Game1_1 from './GamePgs/Game1_1';
import Game1_2 from './GamePgs/Game1_2';
import Game1_3 from './GamePgs/Game1_3';
import Game1_4 from './GamePgs/Game1_4';
import Game2 from './GamePgs/Game2';
import Game2_1 from './GamePgs/Game2_1';
import Game2_2 from './GamePgs/Game2_2';
import Game2_3 from './GamePgs/Game2_3';
import Game2_4 from './GamePgs/Game2_4';
import Game2_5 from './GamePgs/Game2_5';
import Game3 from './GamePgs/Game3';
import Game3_1 from './GamePgs/Game3_1';
import Game3_2 from './GamePgs/Game3_2';
import Game3_3 from './GamePgs/Game3_3';
import Game3_4 from './GamePgs/Game3_4';
import Game4 from './GamePgs/Game4';
import Game5 from './GamePgs/Game5';
import Game5_1 from './GamePgs/Game5_1';
import Game5_2 from './GamePgs/Game5_2';
import Game5_3 from './GamePgs/Game5_3';
import Game5_4 from './GamePgs/Game5_4';
import Game5_5 from './GamePgs/Game5_5';
import Game6 from './GamePgs/Game6';
import Game6_1 from './GamePgs/Game6_1';
import Game8 from './GamePgs/Game8';
import Game8_1 from './GamePgs/Game8_1';
import Game8_2 from './GamePgs/Game8_2';
import Game8_3 from './GamePgs/Game8_3';
import Game8_4 from './GamePgs/Game8_4';

import Game9_1 from './GamePgs/Game9_1';
import Game9_2 from './GamePgs/Game9_2';
import Game9_3 from './GamePgs/Game9_3';
import Game9_4 from './GamePgs/Game9_4';
import Game9_5 from './GamePgs/Game9_5';
import Game9_6 from './GamePgs/Game9_6';
import Game9_7 from './GamePgs/Game9_7';
import Game9_8 from './GamePgs/Game9_8';

import Game10_1 from './GamePgs/Game10_1';
import Game10_2 from './GamePgs/Game10_2';
import Game10_3 from './GamePgs/Game10_3';
import Game10_4 from './GamePgs/Game10_4';
import Game10_5 from './GamePgs/Game10_5';
import Game10_6 from './GamePgs/Game10_6';
import Game10_7 from './GamePgs/Game10_7';
import Game10_8 from './GamePgs/Game10_8';

import Game11_1 from './GamePgs/Game11_1';
import Game11_2 from './GamePgs/Game11_2';
import Game11_3 from './GamePgs/Game11_3';
import Game11_4 from './GamePgs/Game11_4';
import Game11_5 from './GamePgs/Game11_5';
import Game11_6 from './GamePgs/Game11_6';
import Game11_7 from './GamePgs/Game11_7';
import Game11_8 from './GamePgs/Game11_8';

import Game12_1 from './GamePgs/Game12_1';
import Game12_2 from './GamePgs/Game12_2';
import Game12_3 from './GamePgs/Game12_3';
import Game12_4 from './GamePgs/Game12_4';
import Game12_5 from './GamePgs/Game12_5';
import Game12_6 from './GamePgs/Game12_6';
import Game12_7 from './GamePgs/Game12_7';
import Game12_8 from './GamePgs/Game12_8';
import Game12_9 from './GamePgs/Game12_9';

import Game13_BEW_1 from './GamePgs/Game13_BEW_1';
import Game13_BEW_2 from './GamePgs/Game13_BEW_2';
import Game13_BEW_3 from './GamePgs/Game13_BEW_3';
import Game13_BEW_4 from './GamePgs/Game13_BEW_4';

import Game13_DS_1 from './GamePgs/Game13_DS_1';
import Game13_DS_2 from './GamePgs/Game13_DS_2';
import Game13_DS_3 from './GamePgs/Game13_DS_3';
import Game13_DS_4 from './GamePgs/Game13_DS_4';

import Game13_FEW_1 from './GamePgs/Game13_FEW_1';
import Game13_FEW_2 from './GamePgs/Game13_FEW_2';
import Game13_FEW_3 from './GamePgs/Game13_FEW_3';
import Game13_FEW_4 from './GamePgs/Game13_FEW_4';

import Game13_MOB_1 from './GamePgs/Game13_MOB_1';
import Game13_MOB_2 from './GamePgs/Game13_MOB_2';
import Game13_MOB_3 from './GamePgs/Game13_MOB_3';
import Game13_MOB_4 from './GamePgs/Game13_MOB_4';

import Game14_1 from './GamePgs/Game14_1';
import Game14_2 from './GamePgs/Game14_2';
import Game14_3 from './GamePgs/Game14_3';
import Game14_4 from './GamePgs/Game14_4';
import Game14_5 from './GamePgs/Game14_5';
import Game14_6 from './GamePgs/Game14_6';
import Game14_7 from './GamePgs/Game14_7';
import Game14_8 from './GamePgs/Game14_8';
import Game14_9 from './GamePgs/Game14_9';
import Game14_10 from './GamePgs/Game14_10';
import Game14_11 from './GamePgs/Game14_11';
import Game14_12 from './GamePgs/Game14_12';
import Game14_13 from './GamePgs/Game14_13';
import Game14_14 from './GamePgs/Game14_14';
import Game14_15 from './GamePgs/Game14_15';
import Game14_16 from './GamePgs/Game14_16';
import Game14_17 from './GamePgs/Game14_17';
import Game14_18 from './GamePgs/Game14_18';
import Game14_19 from './GamePgs/Game14_19';

function Game() {
	return (
		<Router>
			<Route path="/game/1" component={Game1} />
			<Route path="/game/1_1" component={Game1_1} />
			<Route path="/game/1_2" component={Game1_2} />
			<Route path="/game/1_3" component={Game1_3} />
			<Route path="/game/1_4" component={Game1_4} />
			<Route path="/game/2" component={Game2} />
			<Route path="/game/2_1" component={Game2_1} />
			<Route path="/game/2_2" component={Game2_2} />
			<Route path="/game/2_3" component={Game2_3} />
			<Route path="/game/2_4" component={Game2_4} />
			<Route path="/game/2_5" component={Game2_5} />
			<Route path="/game/3" component={Game3} />
			<Route path="/game/3_1" component={Game3_1} />
			<Route path="/game/3_2" component={Game3_2} />
			<Route path="/game/3_3" component={Game3_3} />
			<Route path="/game/3_4" component={Game3_4} />
			<Route path="/game/4" component={Game4} />
			{/* Page 9 */}
			<Route path="/game/9_1" component={Game9_1}/>
			<Route path="/game/9_2" component={Game9_2}/>
			<Route path="/game/9_3" component={Game9_3}/> 
			<Route path="/game/9_4" component={Game9_4}/> 
			<Route path="/game/9_5" component={Game9_5}/> 
			<Route path="/game/9_6" component={Game9_6}/> 
			<Route path="/game/9_7" component={Game9_7}/> 
			<Route path="/game/9_8" component={Game9_8}/> 
			{/* Page 10 */}
			<Route path="/game/10_1" component={Game10_1}/> 
			<Route path="/game/10_2" component={Game10_2}/> 
			<Route path="/game/10_3" component={Game10_3}/> 
			<Route path="/game/10_4" component={Game10_4}/> 
			<Route path="/game/10_5" component={Game10_5}/> 
			<Route path="/game/10_6" component={Game10_6}/> 
			<Route path="/game/10_7" component={Game10_7}/> 
			<Route path="/game/10_8" component={Game10_8}/> 
			{/* Page 11 */}
			<Route path="/game/11_1" component={Game11_1}/> 
			<Route path="/game/11_2" component={Game11_2}/> 
			<Route path="/game/11_3" component={Game11_3}/> 
			<Route path="/game/11_4" component={Game11_4}/> 
			<Route path="/game/11_5" component={Game11_5}/> 
			<Route path="/game/11_6" component={Game11_6}/> 
			<Route path="/game/11_7" component={Game11_7}/> 
			<Route path="/game/11_8" component={Game11_8}/> 
			{/* Page 12 */}
			<Route path="/game/12_1" component={Game12_1}/> 
			<Route path="/game/12_2" component={Game12_2}/> 
			<Route path="/game/12_3" component={Game12_3}/> 
			<Route path="/game/12_4" component={Game12_4}/> 
			<Route path="/game/12_5" component={Game12_5}/> 
			<Route path="/game/12_6" component={Game12_6}/> 
			<Route path="/game/12_7" component={Game12_7}/> 
			<Route path="/game/12_8" component={Game12_8}/>
			{/* Dan recommendations */}
			{/* FEW */}
			<Route path="/game/13_FEW_1" component={Game13_FEW_1}/> 
			<Route path="/game/13_FEW_2" component={Game13_FEW_2}/>
			<Route path="/game/13_FEW_3" component={Game13_FEW_3}/>
			<Route path="/game/13_FEW_4" component={Game13_FEW_4}/>
			{/* BEW */}
			<Route path="/game/13_BEW_1" component={Game13_BEW_1}/> 
			<Route path="/game/13_BEW_2" component={Game13_BEW_2}/>
			<Route path="/game/13_BEW_3" component={Game13_BEW_3}/>
			<Route path="/game/13_BEW_4" component={Game13_BEW_4}/>
			{/* DS */}
			<Route path="/game/13_DS_1" component={Game13_DS_1}/> 
			<Route path="/game/13_DS_2" component={Game13_DS_2}/>
			<Route path="/game/13_DS_3" component={Game13_DS_3}/>
			<Route path="/game/13_DS_4" component={Game13_DS_4}/>
			{/* MOB */}
			<Route path="/game/13_MOB_1" component={Game13_MOB_1}/> 
			<Route path="/game/13_MOB_2" component={Game13_MOB_2}/>
			<Route path="/game/13_MOB_3" component={Game13_MOB_3}/>
			<Route path="/game/13_MOB_4" component={Game13_MOB_4}/>
			{/* End of game */}
			<Route path="/game/14_1" component={Game14_1}/> 
			<Route path="/game/14_2" component={Game14_2}/> 
			<Route path="/game/14_3" component={Game14_3}/> 
			<Route path="/game/14_4" component={Game14_4}/> 
			<Route path="/game/14_5" component={Game14_5}/> 
			<Route path="/game/14_6" component={Game14_6}/> 
			<Route path="/game/14_7" component={Game14_7}/> 
			<Route path="/game/14_8" component={Game14_8}/> 
			<Route path="/game/14_9" component={Game14_9}/> 
			<Route path="/game/14_10" component={Game14_10}/> 
			<Route path="/game/14_11" component={Game14_11}/> 
			<Route path="/game/14_12" component={Game14_12}/> 
			<Route path="/game/14_13" component={Game14_13}/> 
			<Route path="/game/14_14" component={Game14_14}/> 
			<Route path="/game/14_15" component={Game14_15}/> 
			<Route path="/game/14_16" component={Game14_16}/> 
			<Route path="/game/14_17" component={Game14_17}/> 
			<Route path="/game/14_18" component={Game14_18}/> 
			<Route path="/game/14_19" component={Game14_19}/> 
			<Route path="/game/5" component={Game5} />
			<Route path="/game/5_1" component={Game5_1} />
			<Route path="/game/5_2" component={Game5_2} />
			<Route path="/game/5_3" component={Game5_3} />
			<Route path="/game/5_4" component={Game5_4} />
			<Route path="/game/5_5" component={Game5_5} />
			<Route path="/game/6" component={Game6} />
			<Route path="/game/6_1" component={Game6_1} />
			<Route path="/game/8" component={Game8} />
			<Route path="/game/8_1" component={Game8_1} />
			<Route path="/game/8_2" component={Game8_2} />
			<Route path="/game/8_3" component={Game8_3} />
			<Route path="/game/8_4" component={Game8_4} />
		</Router>
	);
}

export default Game;
