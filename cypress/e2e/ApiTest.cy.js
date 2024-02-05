describe('API Testing', () => {
    it('tests the name generator API', () => {
        cy.request('GET', 'https://name-gen-three.vercel.app/api/generateName').then((response) => {
          expect(response.status).to.eq(200);
          // Additional assertions about the response body can be added here
        });
      });
    });