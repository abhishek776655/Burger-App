import React from 'react';
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const BuildControls = (props) => {
    const Control =
        [
            { Label: "Salad", type: 'salad' },
            { Label: "Bacon", type: 'bacon' },
            { Label: "Cheese", type: 'cheese' },
            { Label: "Meat", type: 'meat' },

        ]
    return (
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>{props.price.toFixed(2)}</strong> </p>
            {Control.map((ctrl) => {
                return <BuildControl key={ctrl.Label}
                    Label={ctrl.Label}
                    added={() => props.ingredientsAdded(ctrl.type)}
                    removed={() => props.ingredientsRemoved(ctrl.type)}
                    disabled={props.disable[ctrl.type]}

                />

            })}
            <button className={classes.OrderButton}
                disabled={!props.purchaseable}
                onClick={props.ordered}
            >{props.isAuth ? 'ORDER NOW' : 'Sign in to Order'}</button>
        </div>
    );
};
export default BuildControls;