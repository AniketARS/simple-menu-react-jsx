class Menu extends React.Component {
  render() {
    let menus = ["Homes", "About", "Services", "Portfolio", "Contact-us"];
    return (
      <div>
        {menus.map((v, i) => {
          return (
            <div key={i}>
              <Link label={v} />
            </div>
          );
        })}
      </div>
    );
  }
}

class Link extends React.Component {
  render() {
    const url =
      "#" +
      this.props.label
        .toLowerCase()
        .trim()
        .replace(" ", "-");
    return <a href={url}>{this.props.label}</a>;
  }
}

ReactDOM.render(<Menu />, document.getElementById("menu"));
