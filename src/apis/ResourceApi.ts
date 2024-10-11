/* tslint:disable */
/* eslint-disable */
/**
 * CoreAPI
 * This is the CatCode CoreAPI handling all resources
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  HTTPValidationError,
} from '../models/index';
import {
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
} from '../models/index';

export interface DeleteResourceRequest {
    type: string;
    name: string;
}

export interface GetResourceRequest {
    type: string;
    name: string;
}

export interface GetResourcesRequest {
    type: string;
}

export interface PatchResourceRequest {
    type: string;
    name: string;
    body: object;
}

export interface PostResourceRequest {
    body: object;
}

export interface PutResourceRequest {
    body: object;
}

/**
 * 
 */
export class ResourceApi extends runtime.BaseAPI {

    /**
     * Delete Resources
     */
    async deleteResourceRaw(requestParameters: DeleteResourceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters['type'] == null) {
            throw new runtime.RequiredError(
                'type',
                'Required parameter "type" was null or undefined when calling deleteResource().'
            );
        }

        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling deleteResource().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/resource/v1/{type}/{name}`.replace(`{${"type"}}`, encodeURIComponent(String(requestParameters['type']))).replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Delete Resources
     */
    async deleteResource(requestParameters: DeleteResourceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.deleteResourceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Should be able to handle resource on the following formats  components: plural name component: singular name components.catcode.io: <plural>.<api-group> component.catcode.io: <singluar>.<api-group> components.catcode.io/v1alpha1: <plural>.<api-group>/<version> component.catcode.io/v1alpha1: <singular>.<api-group>/<version>  note following is also valid templates.templating.catcode.io/v1alpha1: <singular>.<api-group>/<version> as the fire . seperated the name from the group.   If api group is not added it should \"try\" to look it up it self. If version is not added it should use the newest.
     * Get Resource
     */
    async getResourceRaw(requestParameters: GetResourceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters['type'] == null) {
            throw new runtime.RequiredError(
                'type',
                'Required parameter "type" was null or undefined when calling getResource().'
            );
        }

        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling getResource().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/resource/v1/{type}/{name}`.replace(`{${"type"}}`, encodeURIComponent(String(requestParameters['type']))).replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Should be able to handle resource on the following formats  components: plural name component: singular name components.catcode.io: <plural>.<api-group> component.catcode.io: <singluar>.<api-group> components.catcode.io/v1alpha1: <plural>.<api-group>/<version> component.catcode.io/v1alpha1: <singular>.<api-group>/<version>  note following is also valid templates.templating.catcode.io/v1alpha1: <singular>.<api-group>/<version> as the fire . seperated the name from the group.   If api group is not added it should \"try\" to look it up it self. If version is not added it should use the newest.
     * Get Resource
     */
    async getResource(requestParameters: GetResourceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.getResourceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Should be able to handle resource on the following formats:  components: plural name component: singular name components.catcode.io: <plural>.<api-group> component.catcode.io: <singular>.<api-group> components.catcode.io/v1alpha1: <plural>.<api-group>/<version> component.catcode.io/v1alpha1: <singular>.<api-group>/<version>  note following is also valid: templates.templating.catcode.io/v1alpha1: <singular>.<api-group>/<version> as the first \".\" separates the name from the group.  If the api group is not added, it should try to look it up itself. If the version is not added, it should use the newest.
     * Get Resources
     */
    async getResourcesRaw(requestParameters: GetResourcesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters['type'] == null) {
            throw new runtime.RequiredError(
                'type',
                'Required parameter "type" was null or undefined when calling getResources().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/resource/v1/{type}`.replace(`{${"type"}}`, encodeURIComponent(String(requestParameters['type']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Should be able to handle resource on the following formats:  components: plural name component: singular name components.catcode.io: <plural>.<api-group> component.catcode.io: <singular>.<api-group> components.catcode.io/v1alpha1: <plural>.<api-group>/<version> component.catcode.io/v1alpha1: <singular>.<api-group>/<version>  note following is also valid: templates.templating.catcode.io/v1alpha1: <singular>.<api-group>/<version> as the first \".\" separates the name from the group.  If the api group is not added, it should try to look it up itself. If the version is not added, it should use the newest.
     * Get Resources
     */
    async getResources(requestParameters: GetResourcesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.getResourcesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Patch Resources
     */
    async patchResourceRaw(requestParameters: PatchResourceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters['type'] == null) {
            throw new runtime.RequiredError(
                'type',
                'Required parameter "type" was null or undefined when calling patchResource().'
            );
        }

        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling patchResource().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling patchResource().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/resource/v1/{type}/{name}`.replace(`{${"type"}}`, encodeURIComponent(String(requestParameters['type']))).replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'] as any,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Patch Resources
     */
    async patchResource(requestParameters: PatchResourceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.patchResourceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Post Resource
     */
    async postResourceRaw(requestParameters: PostResourceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling postResource().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/resource/v1/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'] as any,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Post Resource
     */
    async postResource(requestParameters: PostResourceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.postResourceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Put Resource
     */
    async putResourceRaw(requestParameters: PutResourceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling putResource().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/resource/v1/`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'] as any,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Put Resource
     */
    async putResource(requestParameters: PutResourceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.putResourceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
