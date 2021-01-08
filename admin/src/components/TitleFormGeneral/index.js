/**

 *
 * TitleFormGeneral
 */

import React, {memo, useMemo} from 'react';
import PropTypes from 'prop-types';
import {get} from "lodash";

function TitleFormGeneral({
                        layout,
                        name,
                      }) {

  const metadatas = useMemo(() => get(layout, ['metadatas', name, 'edit'], {}), [layout, name]);
  const {description, placeholder} = metadatas;

  return (
    <div>
      <h3>{placeholder}</h3>
      <p>{description}</p>
    </div>
  );
}

TitleFormGeneral.defaultProps = {
  name: ''
};

TitleFormGeneral.propTypes = {
  name: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  layout: PropTypes.object.isRequired
};

export default memo(TitleFormGeneral);