/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import '@patternfly/react-core/dist/styles/base.css';
import {
  Link,
} from 'react-router-dom';
import './index.css';
import {
  Card,
  Badge,
  GalleryItem,
  TextContent,
  CardHead,
  CardHeader,
  CardFooter,
  CardBody,
  CardActions,
  Label,
} from '@patternfly/react-core';
import {
  StarIcon,
  BuildIcon,
  DomainIcon,
} from '@patternfly/react-icons';
export interface TaskPropObject {
  name: string;
  description: string;
  rating: number;
  downloads: number;
  yaml: string;
  tags: [];
}

export interface TaskProp {
  task: TaskPropObject
}

// eslint-disable-next-line
const Task: React.FC<TaskProp> = (props: any) => {
  const tempArr: any = [];
  if (props.task.tags != null) {
    props.task.tags.forEach((item: any) => {
      tempArr.push(item.name)
    })
  } else {
    tempArr.push([]);
  }

  //  for verification status of resources
  // let verifiedStatus: any;
  // if (props.task.verified === true) {
  //   verifiedStatus = <div className="vtask" >
  //     <Label isCompact style={{ backgroundColor: '#B8AD8B', fontSize: '0.9em' }}>Verified</Label>
  //   </div>;
  // }
  // for adding icon to task and pipeline
  let resourceIcon: React.ReactNode;
  if (props.task.type === 'task') {
    resourceIcon = <BuildIcon size="xl" color="#484848" />;
  } else {
    resourceIcon = <DomainIcon size="xl" color="#484848" />;
  };

  return (
    <GalleryItem>
      <Link to={'/detail/' + props.task.id}>
        <Card className="card" isHoverable style={{ marginBottom: '2em', borderRadius: '0.5em' }}>
          {/* {verifiedStatus} */}

          <CardHead>
            <div>
              {resourceIcon}
            </div>

            <CardActions className="cardActions">
              <StarIcon style={{ color: '#484848' }} />
              <TextContent className="text">{props.task.rating.toFixed(1)}</TextContent>
            </CardActions>
          </CardHead>
          <CardHeader className="catalog-tile-pf-header">
            <span className="task-heading">{props.task.name[0].toUpperCase() + props.task.name.slice(1)}</span>
          </CardHeader>
          <CardBody className="catalog-tile-pf-body">
            <div className="catalog-tile-pf-description">
              <span>
                {`${props.task.description.substring(0, 100)}   ...`}
              </span>
            </div>
          </CardBody>
          <CardFooter className="catalog-tile-pf-footer">
            {
              tempArr.map((tag: any) => {
                return (
                  <Badge style={{
                    marginLeft: '0.2em',
                    marginBottom: '1em',
                  }} key={`badge-${tag}`}
                    className="badge">{tag}</Badge>
                )
              })
            }
          </CardFooter>
        </Card>
      </Link>
    </GalleryItem>
  );
};
export default Task;
