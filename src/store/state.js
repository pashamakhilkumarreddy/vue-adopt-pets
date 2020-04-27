import {
  Cats,
  Dogs,
} from '@/data';

export default {
  cats: Cats,
  dogs: Dogs,
  pets: [...Cats, ...Dogs],
};
