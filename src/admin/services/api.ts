

// Configuration de base de l'API
const API_BASE_URL = 'http://localhost:5000/api/home-contenu';

// Types pour les réponses API
interface ApiResponse<T> {
  success: boolean;
  data: T;
}

// Types pour les données
export interface ContactData {
  id: number;
  title: string;
  description1: string;
  description2: string;
  phone: string;
  email: string;
  created_at: string;
  updated_at: string;
}

export interface CulturalAttireData {
  id: number;
  title: string;
  description1: string;
  description2: string;
  description3: string;
  description4: string;
  description5: string;
  created_at: string;
  updated_at: string;
}

export interface FollowersData {
  id: number;
  title: string;
  description1: string;
  description2: string;
  description3: string;
  description4: string;
  description5: string;
  created_at: string;
  updated_at: string;
}

export interface HomePageData {
  id: number;
  video_section_title: string;
  video_section_content: string;
  created_at: string;
  updated_at: string;
}

export interface HomePageVideosData {
  id: number;
  home_page_id: number;
  src: string;
  poster: string;
  created_at: string;
  updated_at: string;
}

export interface YahwehData {
  id: number;
  title1: string;
  title2: string;
  description1: string;
  description2: string;
  description3: string;
  description4: string;
  description5: string;
  description6: string;
  created_at: string;
  updated_at: string;
}

export interface YahwehBenData {
  id: number;
  title1: string;
  title2: string;
  description1: string;
  description2: string;
  description3: string;
  description4: string;
  description5: string;
  description6: string;
  description7: string;
  description8: string;
  description9: string;
  created_at: string;
  updated_at: string;
}

// Classe pour gérer les appels API
export class ApiService {
  private static async makeRequest<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const defaultOptions: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await fetch(url, { ...defaultOptions, ...options });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result: ApiResponse<T> = await response.json();
      
      if (!result.success) {
        throw new Error('API response indicates failure');
      }
      
      return result.data;
    } catch (error) {
      console.error(`API Error for ${endpoint}:`, error);
      throw error;
    }
  }

  // Contact API
  static async getContacts(): Promise<ContactData> {
    return this.makeRequest<ContactData>('/contacts/');
  }

  static async updateContact(id: number, data: Partial<ContactData>): Promise<ContactData> {
    return this.makeRequest<ContactData>(`/contacts/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  // Cultural Attire API
  static async getCulturalAttire(): Promise<CulturalAttireData> {
    return this.makeRequest<CulturalAttireData>('/cultural-attire');
  }

  static async updateCulturalAttire(id: number, data: Partial<CulturalAttireData>): Promise<CulturalAttireData> {
    return this.makeRequest<CulturalAttireData>(`/cultural-attire/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  // Followers API
  static async getFollowers(): Promise<FollowersData> {
    return this.makeRequest<FollowersData>('/followers');
  }

  static async updateFollowers(id: number, data: Partial<FollowersData>): Promise<FollowersData> {
    return this.makeRequest<FollowersData>(`/followers/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  // Home Page API
  static async getHomePage(): Promise<HomePageData> {
    return this.makeRequest<HomePageData>('/home-page');
  }

  static async updateHomePage(id: number, data: Partial<HomePageData>): Promise<HomePageData> {
    return this.makeRequest<HomePageData>(`/home-page/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  // Home Page Videos API
  static async getHomePageVideos(): Promise<HomePageVideosData> {
    return this.makeRequest<HomePageVideosData>('/home-page-videos');
  }

  static async updateHomePageVideos(id: number, data: Partial<HomePageVideosData>): Promise<HomePageVideosData> {
    return this.makeRequest<HomePageVideosData>(`/home-page-videos/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  // Yahweh API
  static async getYahweh(): Promise<YahwehData> {
    return this.makeRequest<YahwehData>('/yahweh');
  }

  static async updateYahweh(id: number, data: Partial<YahwehData>): Promise<YahwehData> {
    return this.makeRequest<YahwehData>(`/yahweh/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  // Yahweh Ben API
  static async getYahwehBen(): Promise<YahwehBenData> {
    return this.makeRequest<YahwehBenData>('/yahweh-ben');
  }

  static async updateYahwehBen(id: number, data: Partial<YahwehBenData>): Promise<YahwehBenData> {
    return this.makeRequest<YahwehBenData>(`/yahweh-ben/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }
}
// Avant le chargement des données, testez l'API