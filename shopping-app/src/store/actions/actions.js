import * as actions from "./actionTypes";

export const incrementQty = id => {
	return { type: actions.INCREMENT_QTY, id };
};

export const decrementQty = id => {
	return { type: actions.DECREMENT_QTY, id };
};

