import React from 'react';
import PropTypes from 'prop-types';

export default class ExpenseCagegoryFormModel extends React.Component {
    render() {
        return (
            <div>
                <h3 className="heading">{this.props.heading}</h3>
                <form onSubmit={this.props.handleSubmit}>
                    <div className="form-group row">
                        <label htmlFor="Name" className="col-sm-2 col-form-label">Name:</label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" id="Name" placeholder="Name"
                                value={this.props.model.name} onChange={this.props.handleChange} />
                        </div>
                    </div>
                    <input type="submit" value="Save" className="btn btn-primary" />
                </form>
            </div>
        );
    }
}

ExpenseCagegoryFormModel.propTypes = {
    heading: PropTypes.string,
    handleSubmit: PropTypes.func,
    model: PropTypes.object,
    handleChange: PropTypes.func,
};