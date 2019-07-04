import React from "react";
import ItemsList from "../../components/ShowItems";
import react_01 from "./4.01 Create a Simple JSX Element";
import react_02 from "./4.02 Create a Complex JSX Element";
import react_03 from "./4.03 Add Comments in JSX";
import react_04 from "./4.04 Render HTML Elements to the DOM";
import react_05 from "./4.05 Define an HTML Class in JSX";
import react_06 from "./4.06 Learn About Self-Closing JSX Tags";
import react_07 from "./4.07 Create a Stateless Functional Component";
import react_08 from "./4.08 Create a React Component";
import react_09 from "./4.09 Create a Component with Composition";
import react_10 from "./4.10 Use React to Render Nested Components";
import react_11 from "./4.11 Compose React Components";
import react_12 from "./4.12 Render a Class Component to the DOM";
import react_13 from "./4.13 Write a React Component from Scratch";
import react_14 from "./4.14 Pass Props to a Stateless Functional Component";
import react_15 from "./4.15 Pass an Array as Props";
import react_16 from "./4.16 Use Default Props";
import react_17 from "./4.17 Override Default Props";
import react_18 from "./4.18 Use PropTypes to Define the Props You Expect";
import react_19 from "./4.19 Access Props Using this.props";
import react_20 from "./4.20 Review Using Props with Stateless Functional Components";
import react_21 from "./4.21 Create a Stateful Component";
import react_22 from "./4.22 Render State in the User Interface";
import react_23 from "./4.23 Render State in the User Interface Another Way";
import react_24 from "./4.24 Set State with this.setState";
import react_25 from "./4.25 Bind this to a Class Method";
import react_26 from "./4.26 Use State to Toggle an Element";
import react_27 from "./4.27 Write a Simple Counter";
import react_28 from "./4.28 Create a Controlled Input";
import react_29 from "./4.29 Create a Controlled Form";
import react_30 from "./4.30 Pass State as Props to Child Components";
import react_31 from "./4.31 Pass a Callback as Props";
import react_32 from "./4.32 Use the Lifecycle Method componentWillMount";
import react_33 from "./4.33 Use the Lifecycle Method componentDidMount";
import react_34 from "./4.34 Add Event Listeners";
import react_35 from "./4.35 Manage Updates with Lifecycle Methods";
import react_36 from "./4.36 Optimize Re-Renders with shouldComponentUpdate";
import react_37 from "./4.37 Introducing Inline Styles";
import react_38 from "./4.38 Add Inline Styles in React";
import react_39 from "./4.39 Use Advanced JavaScript in React Render Method";
import react_40 from "./4.40 Render with an IfElse Condition";
import react_41 from "./4.41 Use && for a More Concise Conditional";
import react_42 from "./4.42 Use a Ternary Expression for Conditional Rendering";
import react_43 from "./4.43 Render Conditionally from Props";
import react_44 from "./4.44 Change Inline CSS Conditionally Based on Component State";
import react_45 from "./4.45 Use Array.map() to Dynamically Render Elements";
import react_46 from "./4.46 Give Sibling Elements a Unique Key Attribute";
import react_47 from "./4.47 Use Array.filter() to Dynamically Filter an Array";
import react_48 from "./4.48 Render React on the Server with renderToString";

const ReatcJSItems = [
  { id: 1, title: "Create a Simple JSX Element", component: react_01 },
  { id: 2, title: "Create a Complex JSX Element", component: react_02 },
  {
    id: 3,
    title: "Add Comments in JSX",
    component: react_03
  },
  {
    id: 4,
    title: "Render HTML Elements to the DOM",
    component: react_04
  },
  {
    id: 5,
    title: "Define an HTML Class in JSX",
    component: react_05
  },
  {
    id: 6,
    title: "Learn About Self-Closing JSX Tags",
    component: react_06
  },
  {
    id: 7,
    title: "Create a Stateless Functional Component",
    component: react_07
  },
  {
    id: 8,
    title: "Create a React Component",
    component: react_08
  },
  {
    id: 9,
    title: "Create a Component with Composition",
    component: react_09
  },
  {
    id: 10,
    title: "Use React to Render Nested Components",
    component: react_10
  },
  {
    id: 11,
    title: "Compose React Components",
    component: react_11
  },
  {
    id: 12,
    title: "Render a Class Component to the DOM",
    component: react_12
  },
  {
    id: 13,
    title: "Write a React Component from Scratch",
    component: react_13
  },
  {
    id: 14,
    title: "Pass Props to a Stateless Functional Component",
    component: react_14
  },
  {
    id: 15,
    title: "Pass an Array as Props",
    component: react_15
  },
  {
    id: 16,
    title: "Use Default Props",
    component: react_16
  },
  {
    id: 17,
    title: "Override Default Props",
    component: react_17
  },
  {
    id: 18,
    title: "Use PropTypes to Define the Props You Expect",
    component: react_18
  },
  {
    id: 19,
    title: "Access Props Using this.props",
    component: react_19
  },
  {
    id: 20,
    title: "Review Using Props with Stateless Functional Components",
    component: react_20
  },
  {
    id: 21,
    title: "Create a Stateful Component",
    component: react_21
  },
  {
    id: 22,
    title: "Render State in the User Interface",
    component: react_22
  },
  {
    id: 23,
    title: "Render State in the User Interface Another Way",
    component: react_23
  },
  {
    id: 24,
    title: "Set State with this.setState",
    component: react_24
  },
  {
    id: 25,
    title: "Bind 'this' to a Class Method",
    component: react_25
  },
  {
    id: 26,
    title: "Use State to Toggle an Element",
    component: react_26
  },
  {
    id: 27,
    title: "Write a Simple Counter",
    component: react_27
  },
  {
    id: 28,
    title: "Create a Controlled Input",
    component: react_28
  },
  {
    id: 29,
    title: "Create a Controlled Form",
    component: react_29
  },
  {
    id: 30,
    title: "Pass State as Props to Child Components",
    component: react_30
  },
  {
    id: 31,
    title: "Pass a Callback as Props",
    component: react_31
  },
  {
    id: 32,
    title: "Use the Lifecycle Method componentWillMount",
    component: react_32
  },
  {
    id: 33,
    title: "Use the Lifecycle Method componentDidMount",
    component: react_33
  },
  {
    id: 34,
    title: "Add Event Listeners",
    component: react_34
  },
  {
    id: 35,
    title: "Manage Updates with Lifecycle Methods",
    component: react_35
  },
  {
    id: 36,
    title: "Optimize Re-Renders with shouldComponentUpdate",
    component: react_36
  },
  {
    id: 37,
    title: "Introducing Inline Styles",
    component: react_37
  },
  {
    id: 38,
    title: "Add Inline Styles in React",
    component: react_38
  },
  {
    id: 39,
    title: "Use Advanced JavaScript in React Render Method",
    component: react_39
  },
  {
    id: 40,
    title: "Render with an If/Else Condition",
    component: react_40
  },
  {
    id: 41,
    title: "Use && for a More Concise Conditional",
    component: react_41
  },
  {
    id: 42,
    title: "Use a Ternary Expression for Conditional Rendering",
    component: react_42
  },
  {
    id: 43,
    title: "Render Conditionally from Props",
    component: react_43
  },
  {
    id: 44,
    title: "Change Inline CSS Conditionally Based on Component State",
    component: react_44
  },
  {
    id: 45,
    title: "Use Array.map() to Dynamically Render Elements",
    component: react_45
  },
  {
    id: 46,
    title: "Give Sibling Elements a Unique Key Attribute",
    component: react_46
  },
  {
    id: 47,
    title: "Use Array.filter() to Dynamically Filter an Array",
    component: react_47
  },
  {
    id: 48,
    title: "Render React on the Server with renderToString",
    component: react_48
  }
];

class ReactJS extends React.Component {
  render() {
    const match = this.props.match;
    return (
      <div>
        <div className="reactjs">
          <ItemsList
            header={"ReactJS"}
            match={match}
            itemsList={ReatcJSItems}
          />
        </div>
      </div>
    );
  }
}
export default ReactJS;
