import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateProjectDto } from '../dto/create-project.dto';
import { UpdateProjectDto } from '../dto/update-project.dto';
import { Supabase } from '../../common/supabase/supabase';
import { SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class ProjectsService {
  private readonly supabase: SupabaseClient;
  constructor(private readonly supabaseInstance: Supabase) {
    this.supabase = supabaseInstance.getClient();
  }

  async findAll() {
    const { data, error } = await this.supabase
      .from('projects')
      .select('*')
      .order('sort_order', { ascending: true });

    if (error) throw new InternalServerErrorException(error.message);
    return data;
  }

  async findOne(slug: string) {
    const { data, error } = await this.supabase
      .from('projects')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error || !data) throw new NotFoundException(`Proyecto con slug ${slug} no encontrado`);
    return data;
  }

  async create(createProjectDto: CreateProjectDto) {
    const { data, error } = await this.supabase
      .from('projects')
      .insert([createProjectDto])
      .select()
      .single();

    if (error) throw new InternalServerErrorException(error.message);
    return data;
  }

  async update(id: string, updateProjectDto: UpdateProjectDto) {
    const { data, error } = await this.supabase
      .from('projects')
      .update(updateProjectDto)
      .eq('id', id)
      .select()
      .single();

    if (error) throw new InternalServerErrorException(error.message);
    return data;
  }

  async remove(id: string) {
    const { error } = await this.supabase
      .from('projects')
      .delete()
      .eq('id', id);

    if (error) throw new InternalServerErrorException(error.message);
    return { message: 'Proyecto eliminado correctamente' };
  }
}