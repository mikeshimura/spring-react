var b = ReactBootstrap;

var Application = React.createClass({displayName: 'Application',
  mixins: [$w.FluxMixin, $w.StoreWatchMixin("RecordStore")],
  getInitialState: function() {
      return {
      
              };
  },
  getStateFromFlux: function() {
  this.props.flux=$w.flux;
  var store = $w.flux.store(["CommonStore","PageStore"]);
  return {
    loading: store.loading,
    error: store.error,
    words:store.words
    };
  },
  render: function() {
    return (
      React.createElement("div", {className: "container-fixed", style: {fontSize:12}}
      
      )
    );
  },
  componentDidMount: function() {
  
  },
  handleChange: function (e) {
    $w.handleChange(this,e);
  },
  handleClick: function (e) {
    $w.handleClick(this,e);
  }

});