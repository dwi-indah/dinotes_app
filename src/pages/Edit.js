import React from 'react'
import { Link } from 'react-router-dom'
import EditNotesForm from '../component/EditNotesForm';
import Container from '../component/ui/Container';
import PageLayout from '../layouts/PageLayout';

const EditPage = () => {
  return (
    <PageLayout>
      <Container>
        <div>
          <h4>
            <Link to="/">Home</Link> / Edit{' '}
          </h4>
        </div>
        <h1>Edit Note</h1>
        <EditNotesForm />
      </Container>
    </PageLayout>
  );
};

export default EditPage;