import React from 'react'
import { Link } from 'react-router-dom'
import AddNotesForm from '../component/AddNotesForm';
import Container from '../component/ui/Container';
import PageLayout from '../layouts/PageLayout';

const AddPage = () => {
    return (
      <PageLayout>
          <Container>
            <div>
              <h4>
                <Link to="/">Home</Link> / Add
              </h4>
            </div>
            <h2>Add New Note</h2>
            <AddNotesForm />
          </Container>
      </PageLayout>
    )
}

export default AddPage;