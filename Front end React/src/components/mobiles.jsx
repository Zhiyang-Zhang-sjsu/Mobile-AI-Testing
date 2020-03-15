import React, { Component } from "react";
import MobilesTable from './mobilesTable';
import ListGroup from './common/listGroup';
import Pagination from './common/pagination'; 
import { getMobiles } from "../services/fakeMobileService";
import { getGenres } from '../services/fakeGenreService';
import { getPlatformId } from '../services/fakeGenreService';
import { paginate } from '../utils/paginate';

class Mobiles extends Component {
    state = {
        mobiles: [],
        genres: [],
        selectedPlatform: '',
        currentPage: 1,
        pageSize: 6
    };

    componentDidMount() {
        this.setState({ mobiles: getMobiles(), genres: getGenres() });
    }

    handleDelete = mobile => {
        const mobiles = this.state.mobiles.filter(m => m._id !== mobile._id);
        this.setState({ mobiles });
    };

    handleLike = (mobile) => {
        const mobiles = [...this.state.mobiles];
        const index = mobiles.indexOf(mobile);
        mobiles[index] = {...mobiles[index]};
        mobiles[index].liked = !mobiles[index].liked;
        this.setState({mobiles})
    }

    handlePageChange = page => {
        this.setState({ currentPage: page });
    };

    handlePlatformSelect = (selectedPlatform) => {
        const mobiles = selectedPlatform.target.value 
            ? getMobiles().filter(m => m.device._id === getPlatformId(selectedPlatform.target.value)._id)
            : getMobiles();

        this.setState({ mobiles });
    };

    

    render() {
      const { length: count } = this.state.mobiles;
      const { pageSize, currentPage, mobiles: allMobiles } = this.state;

      if (count === 0) return <p>There are no mobiles in the database.</p>;

      const mobiles = paginate(allMobiles, currentPage, pageSize);

      return (
          <div className="row">
            <div className="col">
              <MobilesTable
                mobiles={mobiles}
                onDelete={this.handleDelete}
                onSelectPlatform={this.handlePlatformSelect}
              />
              <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={this.handlePageChange}
              />
            </div>
          </div>
      );
    }
}

export default Mobiles;
